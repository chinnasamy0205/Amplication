import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FeatureController } from "../feature.controller";
import { FeatureService } from "../feature.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  featureDesc: "exampleFeatureDesc",
  featureEndDate: new Date(),
  featureId: "exampleFeatureId",
  featureName: "exampleFeatureName",
  featurePrereq: "exampleFeaturePrereq",
  featureProjId: "exampleFeatureProjId",
  featureStDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  featureDesc: "exampleFeatureDesc",
  featureEndDate: new Date(),
  featureId: "exampleFeatureId",
  featureName: "exampleFeatureName",
  featurePrereq: "exampleFeaturePrereq",
  featureProjId: "exampleFeatureProjId",
  featureStDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    featureDesc: "exampleFeatureDesc",
    featureEndDate: new Date(),
    featureId: "exampleFeatureId",
    featureName: "exampleFeatureName",
    featurePrereq: "exampleFeaturePrereq",
    featureProjId: "exampleFeatureProjId",
    featureStDate: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  featureDesc: "exampleFeatureDesc",
  featureEndDate: new Date(),
  featureId: "exampleFeatureId",
  featureName: "exampleFeatureName",
  featurePrereq: "exampleFeaturePrereq",
  featureProjId: "exampleFeatureProjId",
  featureStDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Feature", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FeatureService,
          useValue: service,
        },
      ],
      controllers: [FeatureController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /features", async () => {
    await request(app.getHttpServer())
      .post("/features")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        featureEndDate: CREATE_RESULT.featureEndDate.toISOString(),
        featureStDate: CREATE_RESULT.featureStDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /features", async () => {
    await request(app.getHttpServer())
      .get("/features")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          featureEndDate: FIND_MANY_RESULT[0].featureEndDate.toISOString(),
          featureStDate: FIND_MANY_RESULT[0].featureStDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /features/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/features"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /features/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/features"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        featureEndDate: FIND_ONE_RESULT.featureEndDate.toISOString(),
        featureStDate: FIND_ONE_RESULT.featureStDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /features existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/features")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        featureEndDate: CREATE_RESULT.featureEndDate.toISOString(),
        featureStDate: CREATE_RESULT.featureStDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/features")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
