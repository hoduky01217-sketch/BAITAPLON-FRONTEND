# Kỹ năng cần có để hoàn thành dự án ComputerShop

Dự án gồm 2 phần tách biệt: **Frontend** (`D:\baitaplon`) và **Backend** (`D:\baitaplon-backend`), giao tiếp qua REST API. Đây là một website thương mại điện tử (bán laptop/linh kiện máy tính) có đầy đủ: trang khách hàng, giỏ hàng, thanh toán (COD + PayPal), và trang quản trị (Admin).

## 1. Tổng quan kiến trúc

| Lớp | Công nghệ |
|---|---|
| Frontend | React 19 (SPA, Create React App) |
| Backend | Node.js + Express 5 (REST API) |
| Database | MongoDB (MongoDB Atlas – cloud) |
| Xác thực | JWT (access token + refresh token) |
| Thanh toán | PayPal SDK |
| Triển khai | Render (backend), có thể Vercel/Netlify (frontend) |

---

## 2. Kỹ năng Frontend

### 2.1 Nền tảng bắt buộc
- **JavaScript (ES6+)**: arrow function, destructuring, spread/rest, promise, async/await, module import/export.
- **React 19**: function component, hooks (`useState`, `useEffect`, `useMemo`, `useRef`), props/children, conditional rendering, list rendering với `key`, controlled input.
- **JSX** và tư duy component hoá giao diện.
- **HTML/CSS** cơ bản: flexbox, grid, responsive layout.

### 2.2 Thư viện & công cụ chính
- **React Router DOM v6**: định tuyến SPA (`<Routes>`, `<Route>`, `useNavigate`, `useParams`, `useLocation`), route guard cho trang admin.
- **Redux Toolkit** + **React Redux**: quản lý state toàn cục (giỏ hàng, thông tin user đăng nhập).
- **redux-persist**: lưu state Redux vào `localStorage` để giữ trạng thái sau khi refresh trang.
- **TanStack React Query v5** (`useQuery`, `useMutation`): fetch/cache dữ liệu server, quản lý trạng thái loading/error khi gọi API — cần nắm đúng API v5 (khác nhiều so với v3/v4: `isPending` thay vì `isLoading` cho mutation, `useQuery` chỉ nhận 1 object argument).
- **Axios**: gọi HTTP API, viết interceptor để tự động gắn/làm mới access token (refresh token flow).
- **Ant Design (antd) v6**: hệ thống UI component (Form, Table, Modal, Drawer, Upload, Select, DatePicker...).
- **styled-components v6**: viết CSS-in-JS, tạo component có style riêng, theming.
- **jwt-decode**: giải mã JWT phía client để đọc thông tin user/thời hạn token.
- **Recharts**: vẽ biểu đồ thống kê (PieChart) cho trang Admin.
- **react-slick / slick-carousel**: carousel/slider banner trang chủ.
- **xlsx / antd-table-saveas-excel**: xuất dữ liệu bảng ra file Excel (tính năng Admin).
- **@paypal/react-paypal-js** (hoặc gọi trực tiếp PayPal SDK qua `window.paypal`): tích hợp nút thanh toán PayPal.
- **Facebook SDK (XFBML)**: tích hợp nút Like/Comment của Facebook.

### 2.3 Kỹ năng nâng cao / thực tế cần có
- Quản lý biến môi trường với `.env` trong Create React App (`REACT_APP_*`, phải restart dev server khi đổi `.env`).
- Xử lý luồng xác thực JWT hoàn chỉnh: lưu token, tự refresh khi hết hạn, đăng xuất khi refresh token cũng hết hạn.
- Xử lý upload ảnh (convert file sang base64) và preview ảnh nhiều tấm (gallery ảnh sản phẩm).
- Debounce input tìm kiếm, phân trang, lọc/sắp xếp dữ liệu bảng.
- Tính toán nghiệp vụ: giá gốc/giá giảm, tổng tiền giỏ hàng, phí vận chuyển theo bậc giá trị đơn hàng.
- Đọc hiểu và xử lý **breaking changes khi nâng cấp phiên bản thư viện** (đây là dự án dùng các phiên bản rất mới, nhiều đoạn code viết theo API cũ cần cập nhật lại) — kỹ năng đọc changelog/migration guide là bắt buộc.
- Debug bằng Chrome DevTools (tab Console/Network) để xác định lỗi runtime, lỗi API.

---

## 3. Kỹ năng Backend

### 3.1 Nền tảng bắt buộc
- **Node.js** (CommonJS module: `require`/`module.exports`).
- **Express.js v5**: định tuyến REST API, middleware, xử lý request/response, xử lý lỗi.
- Tư duy **kiến trúc phân lớp**: Route → Controller → Service → Model (tách biệt trách nhiệm rõ ràng).
- **RESTful API design**: định nghĩa endpoint theo chuẩn (GET/POST/PUT/DELETE), quy ước response (`status`, `message`, `data`).

### 3.2 Thư viện & công cụ chính
- **Mongoose v9** (ODM cho MongoDB): định nghĩa Schema/Model, validate dữ liệu (`required`, `min`, `max`, `unique`), truy vấn (`find`, `findOne`, `findByIdAndUpdate`, `countDocuments`, `distinct`...).
- **MongoDB / MongoDB Atlas**: hiểu khái niệm document, collection, connection string, thao tác dữ liệu qua Mongo Shell hoặc Compass để debug.
- **jsonwebtoken (JWT)**: tạo & xác thực access token/refresh token, thiết lập thời hạn (`expiresIn`) hợp lý.
- **bcrypt**: mã hoá mật khẩu người dùng (hash, compare), không bao giờ lưu plain-text password.
- **cookie-parser**: đọc/ghi cookie (`refresh_token` lưu dạng httpOnly cookie).
- **cors**: cấu hình Cross-Origin Resource Sharing đúng cách khi frontend/backend khác domain/port, đặc biệt khi có gửi cookie (`credentials: true`).
- **dotenv**: quản lý biến môi trường nhạy cảm (secret key, connection string, thông tin email/PayPal) — không commit file `.env` lên Git.
- **nodemailer** (+ `nodemailer-plugin-inline-base64`): gửi email tự động (xác nhận đơn hàng) qua Gmail SMTP, dùng App Password thay vì mật khẩu Gmail thật.
- **nodemon**: tự động reload server khi code thay đổi trong quá trình phát triển.

### 3.3 Kỹ năng nâng cao / thực tế cần có
- Thiết kế **middleware xác thực & phân quyền** (`authMiddleWare` cho admin, `authUserMiddleWare` cho chính chủ tài khoản), bảo vệ route nhạy cảm.
- Validate dữ liệu đầu vào ở tầng API (không chỉ dựa vào validate của DB) để trả lỗi rõ ràng thay vì để lỗi hệ thống rò rỉ ra ngoài.
- Xử lý **transaction nghiệp vụ nhiều bước** (tạo đơn hàng → trừ tồn kho từng sản phẩm → gửi email xác nhận), đảm bảo lỗi ở bước phụ (gửi email) không làm hỏng bước chính (tạo đơn hàng).
- Hiểu và xử lý đúng **Promise/async-await**, tránh bug kinh điển: quên `return` trước `resolve()`/`reject()` trong `Promise` khiến code chạy tiếp sau khi đã coi như kết thúc.
- Bảo mật cơ bản: không hard-code secret, giới hạn phạm vi CORS, không trả lỗi hệ thống thô (stack trace) trực tiếp cho client.
- Đọc và migrate API khi nâng cấp phiên bản lớn (ví dụ Mongoose v6 → v9 loại bỏ hẳn `Model.count()`, chỉ còn `countDocuments()`).

---

## 4. Kỹ năng dùng chung / DevOps

- **Git & GitHub**: quản lý version, nhánh, commit rõ ràng.
- **npm**: quản lý dependency, hiểu ý nghĩa semver (`^`, `~`) và rủi ro khi dependency tự nâng cấp lên major version mới gây lỗi (chính là nguyên nhân phần lớn lỗi đã gặp trong dự án này).
- **Biến môi trường & bảo mật secret**: tách biệt cấu hình theo môi trường (development/production), không để lộ secret trong code hoặc Git.
- **Triển khai (Deployment)**: 
  - Backend: triển khai Node.js lên **Render** (hoặc Railway/Heroku tương đương).
  - Frontend: build React app tĩnh (`npm run build`) và triển khai lên Vercel/Netlify/Render Static Site.
  - Cấu hình `proxy`/`REACT_APP_API_URL` trỏ đúng domain backend khi lên production.
- **Testing thủ công / Debug**: dùng Chrome DevTools (Console, Network tab) và test API trực tiếp bằng `curl`/Postman để cô lập lỗi frontend hay backend.
- **Đọc tài liệu chính thức (docs)**: khả năng tự tra cứu changelog của React Query, Ant Design, Mongoose, Express khi các thư viện này thay đổi API giữa các phiên bản.

---

## 5. Kiến thức nghiệp vụ (Domain knowledge)

- Luồng nghiệp vụ e-commerce cơ bản: đăng ký/đăng nhập → duyệt sản phẩm → giỏ hàng → thanh toán → quản lý đơn hàng → trang quản trị (CRUD sản phẩm/người dùng/đơn hàng, thống kê).
- Tính toán giá: giá gốc, phần trăm giảm giá, phí vận chuyển theo ngưỡng giá trị đơn hàng, tổng tiền.
- Tích hợp cổng thanh toán bên thứ ba (PayPal): hiểu khái niệm Sandbox vs Production, Client ID, luồng `createOrder` → `onApprove` → `capture`.
- Quy đổi tiền tệ (VND ↔ USD) khi PayPal chỉ hỗ trợ thanh toán bằng ngoại tệ.

---

## 6. Tóm tắt nhanh (checklist)

- [ ] JavaScript ES6+ vững, React Hooks
- [ ] React Router, Redux Toolkit, React Query
- [ ] Ant Design + styled-components
- [ ] Axios + JWT authentication flow (access/refresh token)
- [ ] Node.js + Express (REST API, middleware)
- [ ] MongoDB + Mongoose (schema, validate, query)
- [ ] Bảo mật cơ bản: bcrypt, JWT, CORS, biến môi trường
- [ ] Tích hợp email (nodemailer) và thanh toán (PayPal SDK)
- [ ] Git, npm, đọc changelog thư viện khi nâng cấp version
- [ ] Triển khai ứng dụng full-stack lên hosting (Render/Vercel...)
