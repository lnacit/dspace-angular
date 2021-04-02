import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticatedGuard } from '../core/auth/authenticated.guard';
import { WorkflowItemPageResolver } from './workflow-item-page.resolver';
import {
  WORKFLOW_ITEM_DELETE_PATH,
  WORKFLOW_ITEM_EDIT_PATH,
  WORKFLOW_ITEM_SEND_BACK_PATH
} from './workflowitems-edit-page-routing-paths';
import { ThemedSubmissionEditComponent } from '../submission/edit/themed-submission-edit.component';
import { ThemedWorkflowItemDeleteComponent } from './workflow-item-delete/themed-workflow-item-delete.component';
import { ThemedWorkflowItemSendBackComponent } from './workflow-item-send-back/themed-workflow-item-send-back.component';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':id',
        resolve: { wfi: WorkflowItemPageResolver },
        children: [
          {
            canActivate: [AuthenticatedGuard],
            path: WORKFLOW_ITEM_EDIT_PATH,
            component: ThemedSubmissionEditComponent,
            resolve: {
              breadcrumb: I18nBreadcrumbResolver
            },
            data: { title: 'workflow-item.edit.title', breadcrumbKey: 'workflow-item.edit' }
          },
          {
            canActivate: [AuthenticatedGuard],
            path: WORKFLOW_ITEM_DELETE_PATH,
            component: ThemedWorkflowItemDeleteComponent,
            resolve: {
              breadcrumb: I18nBreadcrumbResolver
            },
            data: { title: 'workflow-item.delete.title', breadcrumbKey: 'workflow-item.edit' }
          },
          {
            canActivate: [AuthenticatedGuard],
            path: WORKFLOW_ITEM_SEND_BACK_PATH,
            component: ThemedWorkflowItemSendBackComponent,
            resolve: {
              breadcrumb: I18nBreadcrumbResolver
            },
            data: { title: 'workflow-item.send-back.title', breadcrumbKey: 'workflow-item.edit' }
          }
        ]
      }]
    )
  ],
  providers: [WorkflowItemPageResolver]
})
/**
 * This module defines the default component to load when navigating to the workflowitems edit page path.
 */
export class WorkflowItemsEditPageRoutingModule {
}
