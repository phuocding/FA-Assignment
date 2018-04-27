# 1 Concept
## 1.1 MVC Pattern
### 1.1.1 Understand MVC Pattern
[Reference from codecademy](#https://www.codecademy.com/articles/mvc)
> a software architecture - a popular way of organizing your code

[Other reference](#https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really)

### 1.1.2 What is its advantages/disadvantages ?
1. Pros:
  - Thể hiện tính chuyên nghiệp
  - Faster development process: Làm việc song song, rut ngắn thời gian, mỗi người đảm nhiệm một phần công việc
  - Ability to provide multiple views: tránh trùng lặp code, nhiều cách để truy cập application
  - Support for asynchronous technique: được tích hợp với framework của JS, làm việc được với file PDF, browser hay cả widgets, load rất nhanh
  - Modification does not affect the entire model: làm việc độc lập và liên kết với nhau, vì vậy mà việc sửa đổi không làm thay đổi toàn bộ cấu trúc
  - MVC model returns the data without formatting:
  - SEO friendly Development platform
> Thể hiện tính chuyên nghiệp trong lập trình, phân tích thiết kế. Do được chia thành các thành phần độc lập nên giúp phát triển ứng dụng nhanh, đơn giản, dễ nâng cấp, bảo trì.
2. Cons
  - Increased complexity.
  - Inefficiency of data access in view.
  - Difficulty of using MVC with modern user interface.
  - Need multiple programmers.
  - Knowledge on multiple technologies is required.
  - Developer have knowledge of client side code and html code.
> Đối với dự án nhỏ việc áp dụng mô hình MC gây cồng kềnh, tốn thời gian trong quá trình phát triển. Tốn thời gian trung chuyển dữ liệu của các thành phần
### 1.1.3 When to use MVC ?
> Từ ưu điểm của nó, ta dùng MVC cho một dự án lơn, cần phân chia công việc để rút ngắn thời gian, dễ bảo trì cũng như sửa lỗi.
## 1.2 ORM
### 1.2.1 Understand ORM and why its important ?
[Object-Relational Mapping](https://medium.freecodecamp.org/a-comparison-of-the-top-orms-for-2018-19c4feeaa5f)
> Kỹ thuật cho phép bạn truy vấn và thao tác dữ liệu từ cơ sở dữ liệu bằng cách sử dụng một mô hình hướng đối tượng.
  - Hiệu suất cao
  - Linh hoạt trong thiết kế ứng dụng
  - Tái sử dụng Code tối ưu
  - Khả năng mở rộng ứng dụng
## 1.3 Testing
### 1.3.1 Understand TDD, BDD:
1. Test-Driven Development là qui trình khi viết và kiểm tra với tiêu chí: Test-First và Refactoring
2. Behavior-Driven Development là sự mở rộng của TDD, dựa vào requirement mà viết kịch bản test dưới dạng ngôn ngữ tự nhiên mà dễ hiểu nhất, rồi mới implement code source vào project.

[Codeutopia](#https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/)

### 1.3.2 Understand about Unit Test:

[Unit Test](#https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a)

[How to start getting](#https://stackoverflow.com/questions/16860/getting-started-with-unit-testing)

[Node hero](#https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/)

[Testing](#https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02)

1. Arrange `Sắp xếp điều kiện và đầu vào cần thiết để test`
2. Act `thực thi hàm, object hay method dưới dạng test`
3. Assert `dự đoán kết quả xảy ra có như mong muốn hay không`

### 1.3.3 Understand about Test runner (e.g jest, mocha)
> JavaScript test framework chạy trên môi trường NodeJS và trong browser, tổ chức và thực thi test được viết bởi assertion framework
### 1.3.4 Understand about Test Assertion Framework (e.g chai, jasmine)
> BDD / TDD assertion library cho Node va browser, là thư viện kiểm tra (lỗi của lập trình viên) tính xác thực của đoạn code, nó kết hợp với test runner như là bơ và bánh mì đi kèm với nhau vậy.
### 1.3.5 Understand about spies, stubs and mocks (e.g sinon)
> mở rộng tính năng cho test assertion framework
 [Best practice](#https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
### 1.3.6 Understand code coverage (e.g nyc)
>
### 1.3.7 Understand HTTP mocking (e.g nock)
## 1.4 API Security
### 1.4.1 Understand Authentication vs Authorization
 [Restful api Authentication](https://blog.restcase.com/restful-api-authentication-basics/)
## 1.5 API Testing with postman
### 1.5.1
[Postman](https://www.getpostman.com/docs/v6/postman/scripts/test_scripts)
### 1.5.2
[Test api by Postman](https://medium.com/aubergine-solutions/api-testing-using-postman-323670c89f6d)
### 1.5.3
[Postman tutorial](https://steelkiwi.com/blog/api-testing-useful-tools-postman-tutorial-and-hints/)
## 1.6 Practice
### 1.6.1 Build Node MVC app with mongoose:
[Refernce:](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/)
[Build Node MVC app with mongoose](https://github.com/phuocding/mvc-node-express)
### 1.6.2 Build a MVC Node App with ORM
[Reference: ](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)
### 1.6.3 Write API Testing for Mobile Phone API
### 1.6.4 Secure your Mobile Phone API with Authentication and Authorization
[Easy node authen setup and local](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)
