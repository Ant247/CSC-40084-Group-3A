```mermaid
graph TD
    subgraph User Stories for BookMeIn2 System
        direction LR

        subgraph Delegates
            direction TB
            DEL_PRE[Pre-event] --> DEL_PRE_US1{As a Delegate, I want to **register for both free and paid exhibitions online by filling out a form** [3] so that I can opt in to attending the event [3]}
            DEL_PRE_US1 --> DEL_PRE_US2{As a Delegate, I must **be redirected to a payment gateway when registering for paid exhibitions** [3] so that payments can be made securely [3]}
            DEL_PRE_US2 --> DEL_PRE_US3{As a Delegate, I want to **receive an automated confirmation email with a QR code upon successful registration** [3] so that I am aware my payment or registration was successful and can check-in [3]}
            DEL_PRE_US3 --> DEL_PRE_US4{As a Delegate, I need to be able to **see a list of exhibitors** [8] so that I can decide which virtual stands to visit}
            DEL_PRE_US4 --> DEL_PRE_US5{As a Delegate, I need to be able to **visit an exhibitor’s virtual stand** [8] so that I can explore their offerings and information}
            DEL_PRE_US5 --> DEL_PRE_US6{As a Delegate, I want to **talk online to the exhibitors** [8] so that I can interact directly and ask questions}
            DEL_ONSITE[Day of Event] --> DEL_ONSITE_US1{As a Delegate, I want to **check-in using my QR code** [4, implied] so that my attendance is registered quickly and easily}
            DEL_ONSITE_US1 --> DEL_ONSITE_US2{As a Delegate, I want to **interact with event activities using my mobile device** [9, implied] so that I can fully participate in the event}
            DEL_POST[Post-event] --> DEL_POST_US1{No explicit post-event functional user stories found in sources for Delegates.}
        end

        subgraph Exhibitors
            direction TB
            EXH_PRE[Pre-event] --> EXH_PRE_US1{As an Exhibitor, I should be able to **set up and customise my virtual stand (including description, location, and timing)** [4] so that potential delegates can prepare in advance [4]}
            EXH_PRE_US1 --> EXH_PRE_US2{As an Exhibitor, I must be able to **view and reply to any questions posted by delegates** [4] so that both parties involved are informed [4]}
            EXH_ONSITE[Day of Event] --> EXH_ONSITE_US1{As an Exhibitor, I should be able to **scan QR codes for lead tracking purposes** [4] so that I know who I have spoken to [4]}
            EXH_ONSITE_US1 --> EXH_ONSITE_US2{As an Exhibitor (in a physical exhibition), I need to be able to **record details of my conversations** [8] so that I can follow up on leads effectively}
            EXH_POST[Post-event] --> EXH_POST_US1{As an Exhibitor, I should be able to **view surveys about my exhibition** [4] so that I can view information relevant to my exhibition [4] (and not other stands [4])}
        end

        subgraph Administrators
            direction TB
            ADMIN_PRE[Pre-event] --> ADMIN_PRE_US1{As an Administrator, I need to be able to **set up the agenda or sessions** [9, implied] so that the event schedule is organised and managed}
            ADMIN_PRE_US1 --> ADMIN_PRE_US2{As an Administrator, I need to be able to **set up speakers** [9, implied] so that their details, sessions, and access to their content are managed}
            ADMIN_PRE_US2 --> ADMIN_PRE_US3{As an Administrator, I need to be able to **set up information about the exhibitors** [9, implied] so that their virtual stands and presence are managed in the system}
            ADMIN_PRE_US3 --> ADMIN_PRE_US4{As an Administrator, I need to be able to **manage the users who are going to use the back end of the system** [9, implied] so that I can control access and permissions for internal users}
            ADMIN_ONSITE[Day of Event] --> ADMIN_ONSITE_US1{No explicit day-of-event functional user stories found in sources for Administrators.}
            ADMIN_POST[Post-event] --> ADMIN_POST_US1{No explicit post-event functional user stories found in sources for Administrators.}
        end

        subgraph Moderators
            direction TB
            MOD_PRE[Pre-event] --> MOD_PRE_US1{No explicit pre-event functional user stories found in sources for Moderators.}
            MOD_ONSITE[Day of Event] --> MOD_ONSITE_US1{As a Moderator, I must have the ability to **manage the live Q&A and approve audience questions** [5] so that I can facilitate interactive sessions}
            MOD_POST[Post-event] --> MOD_POST_US1{As a Moderator, I should still have **access to session messages and surveys after the event** [5] so that I can review event interactions}
            MOD_POST_US1 --> MOD_POST_US2{As a Moderator, I should also have **access to feedback for the session I was working on** [5] so that I can review my performance and session effectiveness}
        end

        subgraph Speakers
            direction TB
            SPK_PRE[Pre-event] --> SPK_PRE_US1{As a Speaker, I need to be able to **get at my session or my stand** [9, implied] so that I can manage and access my presentation materials or virtual space}
            SPK_ONSITE[Day of Event] --> SPK_ONSITE_US1{No explicit day-of-event functional user stories found in sources for Speakers.}
            SPK_POST[Post-event] --> SPK_POST_US1{No explicit post-event functional user stories found in sources for Speakers.}
        end
    end
```
