Creating a use case diagram for an internship portal system involves identifying the main actors, use cases, and their relationships within the system. Below is a simplified example of a use case diagram for an internship portal system:

# Actors:

1. Student: Users who are seeking internships.
Employer: Companies or organizations offering internships.
3. Admin: System administrators responsible for managing the portal.

# Student Use Cases:
Browse Internships : Students can search and view available internship listings.
Apply for Internship : Students can apply for internships they are interested in and can get Confirmation for their applied Role.
Add Testimonials : Students can submit testimonials about their experience with our website.
Round Clearance : Stundets Get Mail and notified on website about decleration of results of each round. 
Upload CV : Student Can upload CV .
Internship Listing: Students can see internship listings.
Auto Portfolio Generation : Our website can create portfolio for students .
Extras : 
Deadline Alert : Notification about the Deadline of Company.
Disable the Application feature for Students after they get hired.
Adding Of tech asses feature.
Filter to get only internsip or placement.

# Employer Use Cases:
Register Account:s employers can register for a portal account.
Post Internship: Employers can create and post new internship opportunities.
Manage Internship Listing: Employers can edit or delete internship listings.
Review Applications: Employers can review and accept/reject student applications.
CG Cut : Employers Can add a CG Cut that removes the apllication of the students having low CG As compared to cut
Result Announcement : The Company Can add excel sheet of result that notifies students about their selection.
Post New Round Announcement: Employers can Announce another Round for the internship role they announced.
Request for Student Ban : If any student caught while cheating can add request to staff to ban that user.

# Common Use Cases
Log In: Registered users can log in to access their accounts.
Administer Portal: Admins can manage user accounts, handle system maintenance, and resolve issues.
Notify Users: The system sends notifications (e.g., email notifications) to users about application status updates.

# Use Case Diagram:

![image](https://github.com/mayank-0407/GetPlaced/assets/97796657/ab251ec5-6cf8-434e-bf50-20ffa99ca74c)

# Use Case Relationships:

Student can perform "Browse Internships," "Apply for Internship," "Register Account," and "Log In" use cases.
Employer can perform "Post Internship," "Manage Internship Listing," "Register Account," and "Log In" use cases.
Admin can perform "Administer Portal" and "Notify Users" use cases.
Users (Students and Employers) have an "is-a" relationship with the "User" actor, indicating that both students and employers are types of users.
