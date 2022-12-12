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
import { HmProtestAccountController } from "../hmProtestAccount.controller";
import { HmProtestAccountService } from "../hmProtestAccount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountBdm: "exampleAccountBdm",
  accountDesc: "exampleAccountDesc",
  accountDm: "exampleAccountDm",
  accountEndDate: new Date(),
  accountId: "exampleAccountId",
  accountName: "exampleAccountName",
  accountPm: "exampleAccountPm",
  accountStDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountBdm: "exampleAccountBdm",
  accountDesc: "exampleAccountDesc",
  accountDm: "exampleAccountDm",
  accountEndDate: new Date(),
  accountId: "exampleAccountId",
  accountName: "exampleAccountName",
  accountPm: "exampleAccountPm",
  accountStDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountBdm: "exampleAccountBdm",
    accountDesc: "exampleAccountDesc",
    accountDm: "exampleAccountDm",
    accountEndDate: new Date(),
    accountId: "exampleAccountId",
    accountName: "exampleAccountName",
    accountPm: "exampleAccountPm",
    accountStDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountBdm: "exampleAccountBdm",
  accountDesc: "exampleAccountDesc",
  accountDm: "exampleAccountDm",
  accountEndDate: new Date(),
  accountId: "exampleAccountId",
  accountName: "exampleAccountName",
  accountPm: "exampleAccountPm",
  accountStDate: new Date(),
  createdAt: new Date(),
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

describe("HmProtestAccount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HmProtestAccountService,
          useValue: service,
        },
      ],
      controllers: [HmProtestAccountController],
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

  test("POST /hmProtestAccounts", async () => {
    await request(app.getHttpServer())
      .post("/hmProtestAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        accountEndDate: CREATE_RESULT.accountEndDate.toISOString(),
        accountStDate: CREATE_RESULT.accountStDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /hmProtestAccounts", async () => {
    await request(app.getHttpServer())
      .get("/hmProtestAccounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          accountEndDate: FIND_MANY_RESULT[0].accountEndDate.toISOString(),
          accountStDate: FIND_MANY_RESULT[0].accountStDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /hmProtestAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hmProtestAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hmProtestAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hmProtestAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        accountEndDate: FIND_ONE_RESULT.accountEndDate.toISOString(),
        accountStDate: FIND_ONE_RESULT.accountStDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /hmProtestAccounts existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/hmProtestAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        accountEndDate: CREATE_RESULT.accountEndDate.toISOString(),
        accountStDate: CREATE_RESULT.accountStDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/hmProtestAccounts")
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
