# JavaScript concepts

***

## Concepts

- Value vs. Reference
    > **

- Scope
    > *Scope là phạm vi hoạt động của biến. Thứ nhất global scope là phạm vi toàn cục nơi mà biến được khai báo, mặc định biến đó có thể đi đế bất kì đâu. Thứ 2 là local scope chỉ các biến được khai báo trong hàm và chỉ hàm đấy mới có thể truy cập đến biến đó. Cuối cùng block scope là những biến được khai báo trong biểu thức như vòng lặp for hay if else.* 

- Hoisting
    > *Là cách mà biến và hàm được khai báo và đẩy lên đầu scope mà chúng được khai báo, tuy nhiên biểu thức hàm và gán giá trị cho biến thì không được hoist* 

- Closures
    > *Closure là một hàm có khả năng ghi nhớ scope của nó kể cả khi nó được gọi bên ngoài hàm chứa nó. Closure * 

- this
    > *Nếu một hàm có this bên trong nó, sự quy chiếu của this này thường chỉ đến một object, để hiểu this trỏ đi đâu, bạn phải xem xét hàm được gọi như thế nào.*

- new
    > **

- apply, call, bind
    > *Là những built-in method dùng để thực thi hay gọi một hàm, cùng làm việc với keyword **this** để quy chiếu đến biến của object mình cần lấy.*

- Prototypes & Inheritance
    > *Việc kế thừa trong JS đều thông qua những thuộc tính prototype, nó được tạo ra mỗi khi một object được tạo và có tất cả những gì object mới có đồng thời thừa hưởng những thuộc tính của cha nó(lớn nhất là object có object.prototype)* 

- Asynchronous JS
    > *JS both are async and sync(single-threated)*

    > **Nói tới bất đồng bộ là nói tới cơ chế quản lí và xử lí Message queue ẩn bên trong JS, hàm không được tự thực thi mà được gọi vào phòng đợi trong Message queue. Như kiểu lấy ticket đi khám bệnh vậy,ngồi ghế chờ và đến lượt người ta gọi thôi.**

    > **Even loop** *có nhiệm vụ như cô y tá, đọc tên người đi khám bệnh, đưa người đó vào phòng khám, người bệnh khám xong thì lại ra gọi người tiếp theo.*

- Higher Order Functions
    > **