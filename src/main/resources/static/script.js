document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('displayUserByIdBtn').addEventListener('click', function() {
        var userId = document.getElementById('userId').value;
        displayUserById(userId);
    });

    document.getElementById('displayUsersBtn').addEventListener('click', function() {
        fetch('/user')
            .then(response => response.json())
            .then(users => {
                let userListHtml = '<h2>User List</h2><ul>';
                users.forEach(function(user) {
                    userListHtml += '<li>' + user.firstName + ' ' + user.lastName + ' ' + user.phoneNumber + '' +
                        ' ' + user.dateOfBirth + ' ' + user.emailAddress + '</li>';
                });
                userListHtml += '</ul>';
                document.getElementById('userList').innerHTML = userListHtml;
            })
            .catch(error => console.error('Error fetching users:', error));
    });

    document.getElementById('deleteUserBtn').addEventListener('click', function() {
        // Get the user ID from the input field
        var userId = document.getElementById('deleteUserId').value;

        // Make an AJAX request to delete the user
        fetch('/user/' + userId, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Optionally, update the user list or perform other actions
                    console.log('User deleted successfully');
                } else {
                    console.error('Failed to delete user');
                }
            })
            .catch(error => console.error('Error:', error));
    });
});

function displayUserById(userId) {
    fetch('/user/' + userId)
        .then(response => response.json())
        .then(user => {
            var displayedUserHtml = '<h3>User Details</h3>';
            displayedUserHtml += '<p>ID: ' + user.id + '</p>';
            displayedUserHtml += '<p>First Name: ' + user.firstName + '</p>';
            displayedUserHtml += '<p>Last Name: ' + user.lastName + '</p>';
            // Add more fields as needed
            document.getElementById('displayedUser').innerHTML = displayedUserHtml;
        })
        .catch(error => console.error('Error fetching user details:', error));
}