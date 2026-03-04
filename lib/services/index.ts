/**
 * Service layer barrel exports.
 *
 * Phase 0: All services delegate to Prisma/Postgres.
 * Phase 3: Business-entity services switch to Salesforce API calls.
 *          Snapshot + ForecastLock services stay on Azure SQL.
 */
export { userService } from './user.service';
export { accountService } from './account.service';
export { opportunityService } from './opportunity.service';
export { snapshotService } from './snapshot.service';
export { renewalPlanService } from './renewal-plan.service';
export { interactionService } from './interaction.service';
export { dataVersionService } from './data-version.service';
export { forecastLockService } from './forecast-lock.service';

export type { UserSelect, UserBrief } from './user.service';
export type { ForecastLockStatus, AccountForecastSnapshot } from './forecast-lock.service';
