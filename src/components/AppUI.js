import React from 'react';

import { Counter } from '../components/Counter';
import { Search } from '../components/Search';
import { TodoList } from '../components/TodoList';
import { Item } from '../components/Item';
import { ButtonCreate } from '../components/ButtonCreate';
import { Loading } from '../Loading/';
import { Error } from '../components/Error';
import { Empty } from '../components/Empty';
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';
import { Form } from '../Form';

function AppUI() {
    const { loading,
        error,
        searcherTodos,
        changeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <>
            <Counter />
            <Search />

            <TodoList>
                {loading && (
                    <>
                        <Loading />
                        <Loading />
                        <Loading />
                    </>
                )}
                {error && <Error />}
                {(!loading && searcherTodos.length === 0) && <Empty />}
                {
                    searcherTodos.map(element => {
                        return <Item completed={element.completed} key={element.text} text={element.text} onComplete={() => changeTodo(element.text)} deleteTodo={() => deleteTodo(element.text)} />
                    })
                }
            </TodoList>

            <ButtonCreate setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <Form />
                </Modal>
            )
            }

        </>
    )
}

export { AppUI }