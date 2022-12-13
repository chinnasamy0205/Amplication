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
import { CategorymgtController } from "../categorymgt.controller";
import { CategorymgtService } from "../categorymgt.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateRefT: new Date(),
  dateRefT1: new Date(),
  id: "exampleId",
  increment: 42,
  totalRecord: "exampleTotalRecord",
  updatedAt: new Date(),
  url: "exampleUrl",
  websiteName: "exampleWebsiteName",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateRefT: new Date(),
  dateRefT1: new Date(),
  id: "exampleId",
  increment: 42,
  totalRecord: "exampleTotalRecord",
  updatedAt: new Date(),
  url: "exampleUrl",
  websiteName: "exampleWebsiteName",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateRefT: new Date(),
    dateRefT1: new Date(),
    id: "exampleId",
    increment: 42,
    totalRecord: "exampleTotalRecord",
    updatedAt: new Date(),
    url: "exampleUrl",
    websiteName: "exampleWebsiteName",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateRefT: new Date(),
  dateRefT1: new Date(),
  id: "exampleId",
  increment: 42,
  totalRecord: "exampleTotalRecord",
  updatedAt: new Date(),
  url: "exampleUrl",
  websiteName: "exampleWebsiteName",
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

describe("Categorymgt", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CategorymgtService,
          useValue: service,
        },
      ],
      controllers: [CategorymgtController],
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

  test("POST /categorymgts", async () => {
    await request(app.getHttpServer())
      .post("/categorymgts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateRefT: CREATE_RESULT.dateRefT.toISOString(),
        dateRefT1: CREATE_RESULT.dateRefT1.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /categorymgts", async () => {
    await request(app.getHttpServer())
      .get("/categorymgts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateRefT: FIND_MANY_RESULT[0].dateRefT.toISOString(),
          dateRefT1: FIND_MANY_RESULT[0].dateRefT1.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /categorymgts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/categorymgts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /categorymgts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/categorymgts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateRefT: FIND_ONE_RESULT.dateRefT.toISOString(),
        dateRefT1: FIND_ONE_RESULT.dateRefT1.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /categorymgts existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/categorymgts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateRefT: CREATE_RESULT.dateRefT.toISOString(),
        dateRefT1: CREATE_RESULT.dateRefT1.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/categorymgts")
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
