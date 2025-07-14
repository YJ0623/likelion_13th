import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">🏠 방학 세션 2 실습</h1>
      <br />
      <div className="flex flex-col gap-4 text-xl">
        <Link to="/todos-crud">
          ➡️ Todos CRUD 페이지로 이동 (실습 1-1. Mock API 활용)
        </Link>
        <br />
        <Link to="/products">
          ➡️ Products 페이지로 이동 (실습 1-2. 실제 쇼핑몰 API 중 GET 하나
          연결하기)
        </Link>
        <br />
        <Link to="/todos-no-query">
          ➡️ TanStack-Query 사용하지 않은 Todos 페이지로 이동 (실습 2.
          TanStack-Query 실습)
        </Link>
        <br />
        <Link to="/todos-tanstack-query">
          ➡️ TanStack-Query 사용한 Todos 페이지로 이동 (실습 2. TanStack-Query
          실습)
        </Link>
      </div>
    </div>
  );
}
