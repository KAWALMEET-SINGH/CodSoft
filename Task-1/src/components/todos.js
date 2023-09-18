import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ item, onDelete }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const handleTextPress = (id) => {
        setSelectedItemId(id);
    };
    return (
        <View 
        activeOpacity={0.6}  style={[styles.todoItem ,
            selectedItemId === item.id && styles.selectedTodoText,
        ]}>
            <Text
            onPress={() => handleTextPress(item.id)}
                 style={styles.todoText}>
                    {item.text}
                    </Text>
            <Button title="Delete" onPress={() => onDelete(item.id)} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    todoText: {
        color: "#323232",
        fontSize: 22

    },
    selectedTodoText: {
        backgroundColor: "#00FF00",
        fontSize: 16
    },
});

export default TodoItem;
