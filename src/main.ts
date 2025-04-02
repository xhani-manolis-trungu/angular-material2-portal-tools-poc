import { VERSION as CDK_VERSION } from '@angular/cdk';
import '@angular/localize/init';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

registerSwiperElements();

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
