# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic:
      - generic:
        - generic [ref=e4]:
          - navigation [ref=e6]:
            - link "All Items" [ref=e7] [cursor=pointer]:
              - /url: ./inventory.html
            - link "About" [ref=e8] [cursor=pointer]:
              - /url: https://saucelabs.com/
            - link "Logout" [ref=e9] [cursor=pointer]:
              - /url: ./index.html
            - generic [ref=e10] [cursor=pointer]: Reset App State
          - button "Close Menu" [ref=e14] [cursor=pointer]
        - button "Open Menu" [ref=e19] [cursor=pointer]
    - generic [ref=e20]:
      - link [ref=e25] [cursor=pointer]:
        - /url: ./cart.html
        - img [ref=e26] [cursor=pointer]
      - generic [ref=e28]: "Checkout: Your Information"
      - generic [ref=e31]:
        - generic [ref=e32]:
          - textbox "First Name" [ref=e33]
          - textbox "Last Name" [ref=e34]
          - textbox "Zip/Postal Code" [ref=e35]
        - generic [ref=e36]:
          - link "CANCEL" [ref=e37] [cursor=pointer]:
            - /url: ./cart.html
          - button "CONTINUE" [ref=e38] [cursor=pointer]
  - contentinfo [ref=e40]:
    - list [ref=e41]:
      - listitem [ref=e42]: Twitter
      - listitem [ref=e43]: Facebook
      - listitem [ref=e44]: LinkedIn
    - generic [ref=e45]: © 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
    - img [ref=e46]
```