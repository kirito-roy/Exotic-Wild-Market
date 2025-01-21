import { TestBed } from '@angular/core/testing';

import { StudentEntryService } from './student-entry.service';

describe('StudentEntryService', () => {
  let service: StudentEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
