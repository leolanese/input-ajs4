/* tslint:disable:no-unused-variable */
import { Component, Inject } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { InputComponent } from './input.component';


describe(`Checking InputComponent:`, () => {

    let inputComponent: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    let myInputFieldHtml: DebugElement;
    let myInputFieldCode: AbstractControl;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          InputComponent
        ],
        imports: [
          ReactiveFormsModule
        ],
        providers: []
      });
    });

    beforeEach(() => {
      // create component and test fixture
      fixture = TestBed.createComponent(InputComponent);

      // get test component from the fixture
      inputComponent = fixture.componentInstance;

      inputComponent.isIcon = true; // basically to make the button visible!

      fixture.detectChanges();

      myInputFieldHtml = fixture.debugElement.query(By.css('div .form-control'));
      myInputFieldCode = inputComponent.form.get('inputName');
    });


    it(`Should create inputComponent component and input must exists :`, () => {
      expect(inputComponent).toBeDefined();
      expect(inputComponent.form.contains("inputName")).toBeTruthy();
    });

    it(`Should the field not be empty:`, () => {
      myInputFieldCode.setValue("");
      expect(inputComponent.form.valid).toBeFalsy();
    });

    it(`Should test that the field is required:`, () => {
      myInputFieldCode.markAsDirty();

      expect(inputComponent.form.get("inputName").valid).toBeFalsy();
    });

    it(`Should test that the field is NOT valid when length > 150 :`, () => {
      let control = inputComponent.form.get("inputName");
      control.setValue("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,");
      expect(inputComponent.form.get("inputName").valid).toBeFalsy();
    });

});


