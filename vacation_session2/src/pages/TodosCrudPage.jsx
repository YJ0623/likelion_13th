import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TodosCrudPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  // GET
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // get
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos',
          {
            params: {
              _limit: 5,
            },
          }
        );
        setTodos(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('GET 요청 실패:', error);
      }
    };

    fetchTodos();
  }, []);

  // POST
  const handleAdd = async () => {
    try {
      // post
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed: false,
      }
    );
    
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  };

  // PATCH
  const handleToggle = async (id) => {
    try {
      // patch
      const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          completed: true,
      })
      console.log('PATCH 완료',res.data);
    } catch (error) {
      console.error('PATCH 요청 실패:', error);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      // delete
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log("DELETE완료", res.data);
    } 
    catch (error) {
      console.error('DELETE 요청 실패:', error);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-2">🛠️ Todo CRUD 실습</h1>

      <Link to="/">⬅️ 홈으로 돌아가기</Link>

      <div className="flex gap-2">
        <input
          className="border px-2 py-1 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="새로운 할 일 입력"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          추가
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(todo.id)}
                className="text-green-600 underline"
              >
                완료
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-600 underline"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
