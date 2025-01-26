const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const fs = require("fs");
const path = require("path");

server.use(middlewares);

// CORS 설정
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// 핀, 정렬, 필터링 커스텀 엔드포인트
server.get("/products/sorted", (req, res) => {
    const dbFilePath = path.join(__dirname, "data.json");
    const db = JSON.parse(fs.readFileSync(dbFilePath, "utf-8"));

    let { sort, order } = req.query;

    // 기본값 설정
    sort = sort || "created_at";
    order = order || "desc";

    // products 배열 가져오기
    let products = db.products;

    // 정렬 로직
    products = products.sort((a, b) => {
        if (a.is_pinned && b.is_pinned) {
            return a.pinned_order - b.pinned_order; // pinned_order로 정렬
        }
        if (a.is_pinned) return -1; // 고정 상태이면 상위로
        if (b.is_pinned) return 1;

        if (sort === "likes") {
            return order === "asc" ? a.likes - b.likes : b.likes - a.likes;
        }

        if (sort === "created_at") {
            return order === "asc"
                ? new Date(a.created_at) - new Date(b.created_at)
                : new Date(b.created_at) - new Date(a.created_at);
        }

        return 0;
    });

    res.json(products);
});

// 기본 CRUD 엔드포인트 처리
server.use(router);

// 서버 시작
server.listen(3001, () => {
    console.log("JSON Server is running on port 3001");
});
