import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

export default function Lab3() {
  console.log('Hello World!');
  return (
    <div>
      <h2>Lab 3</h2>
      <VariablesAndConstants></VariablesAndConstants>
      <VariableTypes></VariableTypes>
      <BooleanVariables></BooleanVariables>
      <IfElse></IfElse>
      <TernaryOperator></TernaryOperator>
      <ConditionalOutputIfElse></ConditionalOutputIfElse>
      <ConditionalOutputInline></ConditionalOutputInline>
      <LegacyFunctions></LegacyFunctions>
      <ArrowFunctions></ArrowFunctions>
      <ImpliedReturn></ImpliedReturn>
      <TemplateLiterals></TemplateLiterals>
      <SimpleArrays></SimpleArrays>
      <ArrayIndexAndLength></ArrayIndexAndLength>
      <AddingAndRemovingToFromArrays></AddingAndRemovingToFromArrays>
      <ForLoops></ForLoops>
      <MapFunction></MapFunction>
      <FindFunction></FindFunction>
      <FindIndex></FindIndex>
      <FilterFunction></FilterFunction>
      <JsonStringify></JsonStringify>
      <House></House>
      <TodoItem></TodoItem>
      <TodoList></TodoList>
      <Spreading></Spreading>
      <Destructing></Destructing>
      <FunctionDestructing></FunctionDestructing>
      <DestructingImports></DestructingImports>
      <Classes></Classes>
      <Styles></Styles>
      <h2>JavaScript</h2>
      <Add a={3} b={4}></Add>
      <h4>Square of 4</h4>
      <Square>4</Square><hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <hr />
      <PathParameters></PathParameters>
    </div>
  );
}
