import { useState } from "react";
import ArticleList from "./componentes/ArticleList/ArticleList";
import Header from "./componentes/Header/Header";
import Form from "./componentes/Form/Form";


function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form  onSubmit={setUser}/> }
    </div>
  )
}

export default App
