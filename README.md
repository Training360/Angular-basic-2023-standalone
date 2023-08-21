# Angular-basic-2023-standalone
Standalone Angular Applications

## Lesson-01
- Explaining the course.

## Lesson-02
- `ng generate @angular/core:standalone`
- choose: `Convert all components, directives and pipes to standalone`
- `ng generate @angular/core:standalone`
- choose: `Remove unnecessary NgModule classes.`
- `ng generate @angular/core:standalone`
- choose: `Bootstrap the project using standalone APIs.`
- Explaining the modifications:
- [main.ts](src/main.ts)
- [TicketModule](src/app/ticket/ticket.module.ts)
- [TicketsComponent](src/app/ticket/tickets/tickets.component.ts)

## Lesson-03
- Generate a new standalone component and pipe:
- `ng g c ticket/filter --standalone`
- `ng g pipe ticket/filter/filter --standalone --skip-tests`
- [FilterPipe](src\app\ticket\filter\filter.pipe.ts)

## Lesson-04
- [FilterComponent](src\app\ticket\filter\filter.component.ts)
- [TicketsComponent](src/app/ticket/tickets/tickets.component.ts)

## Lesson-05
