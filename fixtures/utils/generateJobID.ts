import { test } from '@playwright/test';
import constants from '../../data/constantsApp.json';
export default function generateRandomString(){
    const randomString = Math.random().toString();

    return randomString.substring(15)
}



