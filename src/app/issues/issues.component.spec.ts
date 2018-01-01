import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { MaterialModules } from '../material';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;
  let backend: MockBackend;
  let http: Http;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesComponent ],
      imports: [MaterialModules],
      providers: [
        BaseRequestOptions,
        MockBackend,
        { 
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    backend = TestBed.get(MockBackend);
    http = TestBed.get(Http);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch issues', fakeAsync(() => {
    spyOn(http, "get").and.callThrough();

    component.ngOnInit();
    tick();

    expect(http.get).toHaveBeenCalled();
  }))
});
