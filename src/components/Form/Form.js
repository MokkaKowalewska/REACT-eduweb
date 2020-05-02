import React from 'react';

const Form = () => (
    <form>
        <input placeholder="name" name="name" />
        <input placeholder="link" name="link" />
        <input placeholder="image" name="image" />
        <textarea placeholder="description" name="description" />
        <button>add new item</button>
    </form>

);

export default Form;
