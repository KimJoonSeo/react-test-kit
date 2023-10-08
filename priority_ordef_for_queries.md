Priority Order for RTL queries

Main Principal : A test should resemble how users interact with the code (component, page, etc...) as much as possible
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

getBy and getAllBy : for the purpose of finding out the specific element(s) exists
queryBy and queryAllBy : for the purpose of finding out the specific element(s) doesn't exist
findBy and findAllBy : for the purpose of testing promise objects