import { useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const TodoList = () => {
  return (
    <div className="">
      <label className="label cursor-pointer">
        <span className="label-text">Remember me</span>
        <input type="checkbox" className="checkbox checkbox-primary" />
      </label>
    </div>
  );
};
