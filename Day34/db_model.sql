-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-09-15 04:03:02.148

-- tables
-- Table: Query
CREATE TABLE Query (
    query_id int  NOT NULL,
    mentor_id int  NOT NULL,
    resolve boolean  NOT NULL,
    CONSTRAINT Query_pk PRIMARY KEY (query_id)
);

-- Table: dashboard
CREATE TABLE dashboard (
    user_id int  NOT NULL,
    attendance boolean  NOT NULL,
    activities varchar  NOT NULL,
    CONSTRAINT dashboard_pk PRIMARY KEY (user_id)
);

-- Table: leadership_board
CREATE TABLE leadership_board (
    student_id int  NOT NULL,
    rank int  NOT NULL,
    batch_id int  NOT NULL,
    placement_student_id int  NOT NULL,
    CONSTRAINT leadership_board_pk PRIMARY KEY (student_id)
);

-- Table: leave_application
CREATE TABLE leave_application (
    batch_id int  NOT NULL,
    day int  NOT NULL,
    reason varchar  NOT NULL,
    CONSTRAINT leave_application_pk PRIMARY KEY (batch_id)
);

-- Table: placement
CREATE TABLE placement (
    student_id int  NOT NULL,
    CTC int  NOT NULL,
    company_id int  NOT NULL,
    student_name varchar  NOT NULL,
    requirement_company_id int  NOT NULL,
    task_task_id int  NOT NULL,
    CONSTRAINT placement_pk PRIMARY KEY (student_id)
);

-- Table: requirement
CREATE TABLE requirement (
    company_id int  NOT NULL,
    company_name varchar  NOT NULL,
    vacancies int  NOT NULL,
    CTC int  NOT NULL,
    dashboard_user_id int  NOT NULL,
    leave_application_batch_id int  NOT NULL,
    CONSTRAINT requirement_pk PRIMARY KEY (company_id)
);

-- Table: task
CREATE TABLE task (
    task_id int  NOT NULL,
    marks int  NOT NULL,
    class_batch_id int  NOT NULL,
    Query_query_id int  NOT NULL,
    CONSTRAINT task_pk PRIMARY KEY (task_id)
);

-- Table: zen_class
CREATE TABLE zen_class (
    batch_id int  NOT NULL,
    task_id int  NOT NULL,
    additional_class varchar  NOT NULL,
    day int  NOT NULL,
    CONSTRAINT zen_class_pk PRIMARY KEY (batch_id)
);

-- foreign keys
-- Reference: leadership_board_placement (table: leadership_board)
ALTER TABLE leadership_board ADD CONSTRAINT leadership_board_placement
    FOREIGN KEY (placement_student_id)
    REFERENCES placement (student_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: placement_requirement (table: placement)
ALTER TABLE placement ADD CONSTRAINT placement_requirement
    FOREIGN KEY (requirement_company_id)
    REFERENCES requirement (company_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: placement_task (table: placement)
ALTER TABLE placement ADD CONSTRAINT placement_task
    FOREIGN KEY (task_task_id)
    REFERENCES task (task_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: requirement_dashboard (table: requirement)
ALTER TABLE requirement ADD CONSTRAINT requirement_dashboard
    FOREIGN KEY (dashboard_user_id)
    REFERENCES dashboard (user_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: requirement_leave_application (table: requirement)
ALTER TABLE requirement ADD CONSTRAINT requirement_leave_application
    FOREIGN KEY (leave_application_batch_id)
    REFERENCES leave_application (batch_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: task_Query (table: task)
ALTER TABLE task ADD CONSTRAINT task_Query
    FOREIGN KEY (Query_query_id)
    REFERENCES Query (query_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: task_class (table: task)
ALTER TABLE task ADD CONSTRAINT task_class
    FOREIGN KEY (class_batch_id)
    REFERENCES zen_class (batch_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

