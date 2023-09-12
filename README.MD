sử dụng react , redux , 
thư viện @mui/material 
giới thiệu : 
trang web bán hàng organic 
-trang chủ
+ có banner giới thiệu, hiển thị sp sale (thay đổi được trong admin)
+ Bộ đếm ngược ngày giờ khuyến mãi 
+nhóm img có đường dẫn đến các nhóm sản phẩm 
+ danh sách sản phẩm 
- trong trang sản phẩm ban đầu hiển thị mặc định 
+ có bộ lọc theo khoảng giá 
+ sắp xếp theo a-z, cao -thấp
+ phân trang 
- chi tiết sp có thêm giỏ hàng 
sp tương tự 




- khi click thêm giỏ hàng thì sẽ gọi đến component .ADD_TO_CART: Reducer này xử lý khi một sản phẩm được thêm vào giỏ hàng. Nó kiểm tra xem sản phẩm đó đã tồn tại trong giỏ hàng (checkProductCart) hoặc chưa. Nếu sản phẩm đã tồn tại, thì nó gọi hàm addQuantityProductCart để tăng số lượng của sản phẩm đó trong giỏ hàng. Nếu sản phẩm chưa tồn tại, thì nó đơn giản là thêm sản phẩm đó vào giỏ hàng.
đồng thời tính toán tiền hàng theo số lượng 
-trong giỏ hàng , theo dõi được số lượng, chủng loại , giá tiền , tăng giảm số lượng , 
-đến phần checkout khi đã đăng nhập thì sẽ có thông tin email, sdt. nhập thêm các trường còn lại . khi mua thành công sẽ hiẻn thị 1 bảng thông tin đơn hàng . đồng tời cập nhật lên firebase . dùng Realtime Database cập nhật đơn hàng ngay lập tức về trang admin .




-useState: useState là một hook được sử dụng để quản lý trạng thái (state) trong các thành phần (components) của React. Nó cho phép bạn khai báo và sử dụng biến trạng thái trong các components function. Khi giá trị của biến trạng thái thay đổi, component sẽ tự động render lại để phản ánh sự thay đổi đó.

-useEffect: useEffect là một hook được sử dụng để thực hiện các tác vụ "side-effect" trong một component. Side-effects là các tác vụ như tải dữ liệu từ máy chủ, theo dõi biến trạng thái, hoặc thao tác với DOM. useEffect cho phép bạn thực hiện các tác vụ này trong một component function và đảm bảo rằng chúng được thực hiện sau khi component đã render.

-useRef: useRef là một hook được sử dụng để tham chiếu đến các phần tử DOM hoặc để lưu trữ các giá trị không thay đổi mà không gây ra việc render lại component khi giá trị thay đổi. Nó thường được sử dụng để thao tác trực tiếp với DOM hoặc để lưu trữ các giá trị "bất biến

-Props là cách truyền dữ liệu từ một component cha đến một component con trong React.và không thay đổi.

-Redux là một thư viện quản lý trạng thái (state management
Redux giúp quản lý trạng thái của ứng dụng một cách hiệu quả và dễ dàng theo dõi. Trạng thái (state) trong Redux được lưu trữ tại một nơi duy nhất gọi là "store", và tất cả các thành phần của ứng dụng có thể truy cập trạng thái này thông qua các "reducers" (hàm xử lý trạng thái). Các thay đổi trong trạng thái được thực hiện thông qua "actions" (hành động), và Redux đảm bảo rằng việc cập nhật trạng thái là không đồng thời (điều này giúp tránh các vấn đề về đồng bộ hóa) và dễ dàng theo dõi.

-useDispatch là một hook từ thư viện Redux, nó cho phép bạn truy cập đối tượng dispatch của Redux trong một thành phần React.

Dispatch là một hàm đặc biệt trong Redux, được sử dụng để gửi các hành động (actions) đến store Redux  để thay đổi trạng thái của ứng dụng.. Khi bạn gửi một action bằng cách sử dụng dispatch, Redux sẽ xử lý action đó và cập nhật trạng thái (state) trong store dựa trên action đó.

-useSelector là một hook cho phép bạn truy cập trạng thái (state) từ store Redux.
Bạn cung cấp một hàm chọn (selector) để lấy dữ liệu cụ thể từ store.
Mỗi khi trạng thái trong store thay đổi, hook useSelector sẽ tự động cập nhật và cung cấp giá trị mới cho bạn.