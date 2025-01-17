import { Component } from "react";
import propTypes from 'prop-types'
export default class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
        return{hasError:true}
    }
    ComponentDidCatch(error,errorInfo)
    {
        console.log(error,errorInfo);;
    }
    render()
    {
        if(this.state.hasError)
        {
            return<p>Something went wrong</p>
        }
        return this.props.children
    }
}
ErrorBoundary.propTypes={
    children: propTypes.node.isRequired
}