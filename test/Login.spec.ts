import { test, expect } from '@playwright/test';
import { AutomationExercise } from '../PageFactory/PageRepository/AutomationExercise';

test('Login with email and password successfully',async({page})=>{
  const login = new AutomationExercise(page)
  
    await login.login()

})