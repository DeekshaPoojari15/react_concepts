import './App.css';

import FunctionalComp from './componentsDemo/FunctionalComp'
import ClassComp from './componentsDemo/ClassComp'
import PropsDemo1 from './propsDemo/PropsDemo1'
import Welcome from './stateDemo/Welcome'
import SetStateDemo from './stateDemo/setStateDemo'
import Destructure from './stateDemo/Destructure'
import EventHandling from './stateDemo/EventHandling'
import Parent from './methodsAsProps/Parent'
import Conditional from './conditionalRendering/Conditional'
import ConditionalElement from './conditionalRendering/ConditionalElement'
import ConditionalTernary from './conditionalRendering/ConditionalTernary'
import ConditionalShort from './conditionalRendering/ConditionalShort'
import NameList from './conditionalRendering/NameList'
import ObjectList from './conditionalRendering/ObjectList'
import KeysList from './conditionalRendering/KeysList'
import IndexList from './conditionalRendering/IndexList'
import StyleSheet from './conditionalRendering/StyleSheet'
import FormElement from './conditionalRendering/FormElement'
import LifeCycleA from './conditionalRendering/LifeCycleA'
import FragmentDemo from './conditionalRendering/FragmentDemo'
import ParentComp from './PureComponentDemo/ParentComp'
import RefsDemo from './PureComponentDemo/RefsDemo'
import RefsDemo2 from './PureComponentDemo/RefsDemo2'
import CompRefs from './PureComponentDemo/CompRefs'
import FRRefs from './PureComponentDemo/FRRefs'
import PortalDemo from './PureComponentDemo/PortalDemo'
import Dashboard from './PureComponentDemo/Dashboard'
import EBDemo from './PureComponentDemo/EBDemo'
import ErrorBoundary from './PureComponentDemo/ErrorBoundary'
import ClickCounter from './HOC/ClickCounter'
import HeaderCounter from './HOC/HeaderCounter'
import Counter from './HOC/Counter'
import PostList from './http/PostList'
import PostForm from './http/PostForm'
import App1 from './context/App1'

function App() {
  return (
    <div>
    {/* 
    <FunctionalComp name="Deeksha" />
    <ClassComp name="DP" /> 
    <PropsDemo1 /> 
    <Welcome />
    <SetStateDemo />
    <Destructure />
    <EventHandling />
    <Parent />
    <Conditional />
    <ConditionalElement />
    <ConditionalTernary />
    <ConditionalShort />
    <NameList />
    <ObjectList />
    <KeysList />
    <IndexList />
    <StyleSheet />
    <FormElement />
    <LifeCycleA />
    <FragmentDemo />
    <ParentComp />
    <RefsDemo />
    <CompRefs />
    <FRRefs />
    <PortalDemo />
    <Dashboard />
    <ErrorBoundary>
    <EBDemo name="Jack" />
    <EBDemo name="Joker" />
    </ErrorBoundary>
    <ErrorBoundary>
    <EBDemo name="Jack" />
    </ErrorBoundary>
    <ErrorBoundary>
    <EBDemo name="Joker" />
    </ErrorBoundary>
    <ClickCounter />
    <HeaderCounter />
    <ClickCounter name="Deeksha" />
    <Counter render={(count, incrementCount) => (
      <ClickCounter count={count} incrementCount={incrementCount} />
    )}
    />
    <PostList />
    <PostForm />
    */}
    <App1 />
    </div>
  );
}

export default App;
