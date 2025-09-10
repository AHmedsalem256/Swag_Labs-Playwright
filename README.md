Playwright Test Automation – SauceDemo
🚀 End-to-end test automation framework built with Playwright using the Page Object Model (POM).
This project automates SauceDemo web application workflows, covering login, inventory, cart, and checkout features.

```
## 📂 Project Structure  
Playwright-Project/
┣ 📂 Pages # Page Object Model classes
┃ ┣ 📄 Login_Page.ts
┃ ┣ 📄 Inventory_Page.ts
┃ ┣ 📄 Cart_Page.ts
┃ ┗ 📄 Checkout_Page.ts
┣ 📂 tests # Test specs
┃ ┣ 📄 Login.spec.ts
┃ ┣ 📄 Inventory.spec.ts
┃ ┣ 📄 Cart.spec.ts
┃ ┗ 📄 Checkout.spec.ts
┣ 📂 playwright-report # Auto-generated HTML reports
┣ 📄 playwright.config.ts
┣ 📄 package.json
┗ 📄 README.md
```


✨ Features
- ✅ Page Object Model (POM) for reusability & maintainability
- ✅ Covers positive & negative test cases
- ✅ Works cross-browser (Chromium, Firefox, WebKit)
- ✅ Built-in reporting with HTML reports & screenshots
- ✅ Ready for CI/CD integration

🛠️ Installation

# Clone the repo
git clone https://github.com/AHmedsalem256/Swag_Labs-Playwright.git

# Install dependencies
npm install

▶️ Running Tests

Run all tests:  
npx playwright test

Run with UI mode:  
npx playwright test --ui

Run in specific browser:  
npx playwright test --project=chromium

📊 Test Reports

After a run, view the HTML report:  
npx playwright show-report

🧪 Example Test Case

test("Login with valid credentials", async ({ page }) => {
  const login = new Login_Page(page);
  await login.navigate();
  await login.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/inventory/);
});

🤝 Contributing

Contributions are welcome! Please fork this repo, create a feature branch, and submit a pull request.

📜 License

This project is licensed under the MIT License.

