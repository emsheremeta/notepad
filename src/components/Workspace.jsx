import { useEffect, useState } from 'react';

function Main({ activeNote, onSave, edit }) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    if (activeNote) {
      setTitle('');
      setBody(activeNote.body);
    }
  }, [activeNote]);

  const handleInputChange = event => {
    console.log(event);
    switch (event.target.id) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'body':
        setBody(event.target.value);
        break;
      default:
        throw new Error('Not supported field: ' + event.target);
    }
  };

  const onBlur = () => {
    onSave({
      id: activeNote.id,
      title: title,
      body: body,
    });
  };

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={title}
          autoFocus
          onChange={handleInputChange}
          onBlur={onBlur}
          readOnly={!edit}
          placeholder={edit ? 'Write your title here' : ''}
          className={edit ? 'class-edit' : 'class-view'}
        />
        <textarea
          id="body"
          value={body}
          placeholder={edit ? 'Write your notes here' : ''}
          onChange={handleInputChange}
          onBlur={onBlur}
          readOnly={!edit}
          className={edit ? 'class-edit' : 'class-view'}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{title}</h1>
        <div className="markdown-preview">{body}</div>
      </div>
    </div>
  );
}
export default Main;
