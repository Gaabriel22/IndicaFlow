import { Controller, Get } from '@nestjs/common';
import { AdminJS } from 'adminjs';
import { AdminJSOptions } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { adminResources } from 'src/admin/admin.resource';

@Controller('admin')
export class AdminJsController {
  private readonly adminJs: AdminJS;
  private readonly adminJsRouter: any;

  constructor() {
    const adminJsOptions: AdminJSOptions = {
      resources: adminResources,
      branding: {
        companyName: 'IndicaFlow',
        logo: 'https://example.com/logo.png', 
      },
    };

    this.adminJs = new AdminJS(adminJsOptions);

    this.adminJsRouter = AdminJSExpress.buildRouter(this.adminJs);
  }

  @Get()
  getAdminJs() {
    return this.adminJsRouter;
  }
}
