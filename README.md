
# User Management API

## UserEntity Class

The UserEntity class represents a user entity in the user management system. It is mapped to the "mt_user" table in the database using Java Persistence API (JPA) annotations. This entity encapsulates information about an individual user, including their personal details such as name, date of birth, phone number, and email address.

Fields
1. id (Long):
Represents the unique identifier for each user.
Annotated with @Id to denote it as the primary key.
Generated using the identity strategy (@GeneratedValue(strategy = GenerationType.IDENTITY)).

2. firstName (String):

Represents the first name of the user.
Annotated with @Column(name = "firstName") to map to the corresponding database column.

3. lastName (String):

Represents the last name of the user.
Annotated with @Column(name = "lastName") for database mapping.

4. dateOfBirth (Date):

Represents the date of birth of the user.
Annotated with @Column(name = "dateOfBirth").

5. phoneNumber (Long):

Represents the phone number of the user.
Annotated with @Column(name = "phoneNumber").

6. emailAddress (String):

Represents the email address of the user.
Annotated with @Column(name = "emailAddress").

### Getter and Setter Methods
1. Getter Methods:

getId(), getFirstName(), getLastName(), getDateOfBirth(), getPhoneNumber(), getEmailAddress()
Retrieve the values of respective fields.

2. Setter Methods:

setId(Long id), setFirstName(String firstName), setLastName(String lastName), setDateOfBirth(Date dateOfBirth), setPhoneNumber(Long phoneNumber), setEmailAddress(String emailAddress)
Set values for respective fields.


## UserController Class
The UserController class is a Spring Boot RESTful controller responsible for handling user-related operations in the user management system. It serves as an interface between the client, which makes HTTP requests, and the underlying UserService, which performs the business logic.

### Endpoints
1. GET /user:

* Description: Retrieve a list of all users.
* Method: GET
* Returns: List of UserEntity objects.

2. GET /user/{id}:

* Description: Retrieve a user by their unique identifier.
* Method: GET
* Parameters: {id} - Path variable representing the user's ID.
* Returns: UserEntity if found, or 404 Not Found if the user does not exist.

3. POST /user:

* Description: Create a new user.
* Method: POST
* Request Body: JSON representation of UserEntity.
* Returns: The created UserEntity.

4. PUT /user:

* Description: Update an existing user.
* Method: PUT
* Request Body: JSON representation of the updated UserEntity.
* Returns: The updated UserEntity.

5. DELETE /user/{id}:

* Description: Delete a user by their unique identifier.
* Method: DELETE
* Parameters: {id} - Path variable representing the user's ID.
* Returns: No content (204 No Content).

### Methods

1. findAllUsers():

* Description: Retrieve a list of all users.
* Endpoint: GET /user
* Returns: List of UserEntity objects.

2. findUserById(Long id):

* Description: Retrieve a user by their unique identifier.
* Endpoint: GET /user/{id}
* Parameters: {id} - Path variable representing the user's ID.
* Returns: UserEntity if found, or 404 Not Found if the user does not exist.

3. saveUser(UserEntity userEntity):

* Description: Create a new user.
* Endpoint: POST /user
* Request Body: JSON representation of UserEntity.
* Returns: The created UserEntity.

4. updateUser(UserEntity userEntity):

* Description: Update an existing user.
* Endpoint: PUT /user
* Request Body: JSON representation of the updated UserEntity.
* Returns: The updated UserEntity.

5. deleteUser(Long id):

* Description: Delete a user by their unique identifier.
* Endpoint: DELETE /user/{id}
* Parameters: {id} - Path variable representing the user's ID.
* Returns: No content (204 No Content).

## Index.html

The HTML file represents a User Management Application interface with various sections for creating, displaying, and deleting users. It includes a form for user creation, buttons to display users and user details, and an input field for user ID to delete a specific user.

### Sections

1. Create User Section:

* A form with input fields for the user's first name, last name, date of birth, phone number, and email address.
* The form submits data to the /user endpoint using the POST method.
* Styled with a class named input-control for consistent formatting.

2. Display User by ID Section:

* An input field to enter a user ID and a button to display user details by ID.
* The displayed user details are shown in the displayedUser div.

3. Display All Users Section:

* A button to retrieve and display a list of all users.
* The list of users is shown in the userList div.

4. Delete User Section:

* An input field to enter a user ID and a button to delete the user by ID.

## Script.js

The JavaScript code is designed to enhance the functionality of the User Management Application's HTML interface. It handles user interactions such as displaying user details by ID, fetching and displaying all users, and deleting a user by ID. The code utilizes the Fetch API to make asynchronous requests to the backend.

### Event Listeners
1. Display User by ID Button:

* Event: click on the "Display User by ID" button (displayUserByIdBtn).
* Functionality: Retrieves the user ID from the input field and makes a fetch request to get user details by ID. Displays the details in the displayedUser div.

2. Display All Users Button:

* Event: click on the "Display Users" button (displayUsersBtn).
* Functionality: Makes a fetch request to retrieve all users and displays them in the userList div.

3. Delete User Button:

* Event: click on the "Delete User" button (deleteUserBtn).
* Functionality: Retrieves the user ID from the input field and makes a fetch request to delete the user by ID. Logs success or failure messages.