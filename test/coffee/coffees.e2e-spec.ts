/* eslint-disable prettier/prettier */
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CoffeesModule } from '../../src/coffees/coffees.module'

describe('[Feature] Coffees - /coffees', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoffeesModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it.todo('Create [POST /] ')
  it.todo('Get All [Get /]')
  it.todo('Get one [GET /:id]')
  it.todo('Update One [PATCH /:id]')
  it.todo('Delete One [DELETE /:id]')

  afterAll(async () => {
    await app.close()
  })
})
