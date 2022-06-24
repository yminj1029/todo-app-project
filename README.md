<br/>

# 개인 토이 프로젝트 TODO(2021.07.20~07.31) [총 11일]

<br/>

## 요약

### 내용

todo list 웹 서비스입니다. 오늘을 기준으로 할일 목록을 생성, 추가, 삭제 할 수 있습니다. 달력을 클릭하여 이전 할일 목록도 볼 수 있으며 이후 목록을 작성하는 것도 가능합니다.

백엔드를 Django, 프론트엔드를 React를 사용하여 구성했습니다. REST방식을 사용하여 post, get, patch, delete 통해 CRUD를 구현하였습니다.

데이터베이스로 mongoDB atlas를 연결하였습니다.

### 주요 기능

1. 로그인, 회원가입 기능 구현하였습니다.
2. 달력을 클릭하여 할일 목록을 볼 수 있습니다.
3. 할일 목록에 대해 생성, 추가, 삭제, 업데이트 가능합니다.


<br/>

## 기능 구현 상세


### 1. UI

#### 1) 회원가입

<img src="https://user-images.githubusercontent.com/68888349/175483227-d43aab09-c232-4247-abbe-98d02173b9ef.png"  width="800" height="400"/>


#### 2) 로그인

<img src="https://user-images.githubusercontent.com/68888349/175483260-9cafd845-28db-4f82-8545-be312d9c5231.png"  width="800" height="400"/>

#### 3) todo list

<img src="https://user-images.githubusercontent.com/68888349/175483258-e6708882-50e9-4eb3-97f6-1963831ea5cf.png"  width="800" height="400"/>


### 2. frontend

#### 1) frontend 구성도

<img src="https://user-images.githubusercontent.com/68888349/175484382-ed6a4e2f-b867-4ebd-bfec-fe4883b1b255.jpeg"  width="800" height="400"/>

#### 2) axios 사용

- token이 있을 경우 token을 헤더에 포함하였습니다.

```jsx
//todo-app-project/front/gui/src/lib/api/client.js

import axios from 'axios';

const client = () => {
  const defaultOptions = {
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Token ${token}` : '';
    return config;
  });
  return instance;
};

export default client();
```
- CRUD 기능을 get, post, patch, delete를 사용하여 구현하였습니다.

```jsx
//todo-app-project/front/gui/src/lib/api/todos.js

import client from './client';

//listTodos -> 날짜별로 가져옴
export const listTodos = ({ date, username }) => {
  return client.get('api/', {
    params: { date: date, username: username },
  });
};
```
#### 3) redux 사용

- redux-saga, redux-actions를 사용하였습니다.(modules/)
- redux-store, redux-devtools를 사용하였습니다.

```jsx
//todo-app-project/front/gui/src/index.js

//리덕스 스토어 만듦 -> redux-devtools사용
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
```

- useSelector, useDispatch 등 hook을 사용하였습니다.

```jsx
//todo-app-project/front/gui/src/containers/todo/ListContainer.js

import React, { useEffect } from 'react';
import TodoList from '../../components/todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../../modules/todo';

const ListContainer = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  //redux state에 있는 값 꺼내옴
  const { date, data, error } = useSelector((state) => ({
    date: state.date.date,
    data: state.todo.todos,
    error: state.todo.error,
  }));

  //날짜가 바뀌면 새 리스트 보여줌
  useEffect(() => {
    dispatch(listTodos({ date: date, username: username }));
  }, [date, username, dispatch]);

  if (error) {
    return <div className="error">로그인 후 사용 가능합니다</div>;
  }
  return <TodoList data={data} date={date}></TodoList>;
};

export default ListContainer;
```

#### 4) react-router-dom 사용

```jsx
//todo-app-project/front/gui/src/App.js

import React from 'react';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route component={JoinPage} exact path="/join"></Route>
      <Route component={LoginPage} exact path="/"></Route>
      <Route component={TodoPage} exact path="/todo"></Route>
    </div>
  );
}

export default App;
```

### 3. backend 구성도

#### 1) backend 구성도

<img src="https://user-images.githubusercontent.com/68888349/175485689-1288b5c4-0cd3-4403-8ce2-dec03f3ad3e1.jpeg"  width="800" height="400"/>

#### 2) rest_framework 사용

- rest_framework라이브러리를 사용하였습니다.
- 인증된 사용자만 접근 가능하게 하였습니다.
- rest_framework기본 인증기능인 authtoken 을 사용하였습니다.
- todo list에서 사용자와 날짜를 필터링하기위한 필터기능을 추가하였습니다.

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',  # 인증된 사용자만 접근 가능
        # 'rest_framework.permissions.AllowAny',  # 우선 다 허가
    ],
    # 자동으로 json으로 바꿔줌
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    # 필터링 기능
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],

    # 기본 인증 기능 : authtoken
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
```

### 3) account 커스터마이징

- 회원가입 시 상세한 에러처리를 위해 account를 app에 추가하고 커스터마이징하였습니다.

```python
from .serializers import CreateUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(['POST'])
@permission_classes([AllowAny])  # 인증 필요없다
def join(request):
    # password
    if(len(request.data['password']) < 8):
        data = {
            'message': 'password는 8글자 이상'
        }
        return Response(data, status=403)
    serializer = CreateUserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()  # DB 저장
        content = {
            'message': '회원가입 성공'
        }
        return Response(content, status=201)
```

<br/>

## 후기

이전 O&O 습관형성 프로젝트 때 첫 페이지였던 달력, 할일 표시를 리액트, 장고 프레임워크로 다시 구성해보았습니다. 

프론트엔드 관련해서 자바스크립트만 잠깐 다뤄본 정도여서 html, css, javaScript를 다시 공부하였습니다. 또한 이전 프로젝트와 달리 프론트엔드와 백엔드를 구분하여 리액트, 장고 프레임워크를 사용하였고 rest방식으로 만들려고 하였습니다. 

장고와 리액트 프레임워크를 사용해보면서 막히는 것이 많았고 <리액트를 다루는 기술>, <장고 & 부트스트랩 파이썬 웹 개발의 정석>을 참고하며 진행하였습니다. 

django restframework와 axios로 프론트엔드와 백엔드를 연결하는 부분이 잘 이해가 가지 않아 drf, axios 도큐먼트와 유튜브 영상을 찾아보았습니다. Authorization header를 수정해야하는 상황이 있어 http에 대해 더 자세한 이해가 필요할 것 같아 <http 완벽 가이드>를 읽었습니다. 

git 브랜치를 따고 github에 올리는 과정을 많이 반복하여 git에 익숙해졌습니다.
