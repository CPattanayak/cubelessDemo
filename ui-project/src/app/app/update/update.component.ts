import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [CustomerService]
})
export class UpdateComponent implements OnInit {

  registerForm: FormGroup;
  customer: Customer = new Customer();
  submitted = false;
  mobileId: any = '';

  constructor(private formBuilder: FormBuilder, private custService: CustomerService,
     private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobileId = params['mobileId'];
      });
    this.initialize();
  }
  // initialize validators for customer form
  initialize() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [this.mobileId, Validators.required]
  });
  }
  populateCustomer() {
    this.customer.email = this.registerForm.get('email').value;
    this.customer.firstName = this.registerForm.get('firstName').value;
    this.customer.lastName = this.registerForm.get('lastName').value;
    this.customer.mobile = this.registerForm.get('mobile').value;
    this.customer.password = this.registerForm.get('password').value;
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.populateCustomer();
      this.custService.updateUser(this.customer.mobile, this.customer).subscribe(
        data => {
         // console.log(data);
          this.submitted = false;
          this.registerForm.reset();
        },
         error => {
         /// console.log(error);
          this.registerForm.reset(this.registerForm.value);
         }
      );

  }

}
