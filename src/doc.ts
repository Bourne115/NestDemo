import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as packageConfig from '../package.json'

export const generateDocument = app => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // jwt 的一个标准 允许 token 鉴权
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api/doc', app, document)
}