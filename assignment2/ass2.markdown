Design a MySQL database that stores data for a web-based task manager.

From the following application specifications, design a database that makes the following features possible.

1. Users can be in one or more organization.
1. There are projects, and each project can belong to one organization
1. There are task lists, and each task list can belong to one project
1. There are tasks that belong to one task list, with at least 'description', and a workflow status (created, open, in progress, complete), assignee, creator
1. Users can participate in projects with project-specific roles such as 'obsever', 'editor', 'administrator'
1. Projects can be archived.
1. All objects can be deleted. Deletion is always a soft-delete.
1. Add audit information to all objects, with some of the following fields in some tables, wherever appropriate
    1. last login
    1. last ip
    1. last edited
    1. last edited by
    1. created on
    1. created by
