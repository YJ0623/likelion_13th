import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";

const Edit = () => {
    const { id } = useParams();
    const data = useDiary(id);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

    const onSubmit = (data) => {
        if(window.confirm("일기를 수정하시겠습니까?")) {
            const { date, content, emotionId } = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace: true});
        }
    }

    const onClickDelete = () => {
        if(window.confirm("정말로 삭제하시겠습니까?")) {
            onDelete(id);
            navigate("/", {replace: true});
        }
    };

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>
    } else {
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"뒤로 가기"} onClick={goBack} />}
                    rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />}
                />
                <Editor initData={data} onSubmit={onSubmit}/>
            </div>
        );
    }
}

export default Edit;