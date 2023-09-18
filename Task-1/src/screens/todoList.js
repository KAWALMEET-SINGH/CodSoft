import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/todos';

const TodoListApp = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: todoText }]);
            setTodoText('');
        }
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <View>
            <Text style={styles.title}>Your Todos</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTodoText(text)}
                value={todoText}
                placeholder="Type Your New Todo"
            />
            <TouchableOpacity onPress={addTodo} style={styles.getStartedButton}>
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TodoItem item={item} onDelete={deleteTodo} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        color: "#323232",
        fontSize: 28,
        fontWeight: "700",
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
    }, getStartedButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal:10,
        backgroundColor: '#6C63FF', 
        borderRadius: 15,
        textAlign:'center'
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default TodoListApp;
