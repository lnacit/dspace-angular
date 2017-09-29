import { RequestError } from '../data/request.models';
import { PageInfo } from '../shared/page-info.model';

/* tslint:disable:max-classes-per-file */
export class RestResponse {
  constructor(
    public isSuccessful: boolean,
    public statusCode: string
  ) { }
}

export class DSOSuccessResponse extends RestResponse {
  constructor(
    public resourceSelfLinks: string[],
    public statusCode: string,
    public pageInfo?: PageInfo
  ) {
    super(true, statusCode);
  }
}

export class EndpointMap {
  [linkName: string]: string
}

export class RootSuccessResponse extends RestResponse {
  constructor(
    public endpointMap: EndpointMap,
    public statusCode: string,
  ) {
    super(true, statusCode);
  }
}

export class ErrorResponse extends RestResponse {
  errorMessage: string;

  constructor(error: RequestError) {
    super(false, error.statusText);
    console.error(error);
    this.errorMessage = error.message;
  }
}
/* tslint:enable:max-classes-per-file */