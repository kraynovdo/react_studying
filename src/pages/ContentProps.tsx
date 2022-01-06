import {Wrapper} from '../components/Wrapper';
import {DoubleWrapper} from '../components/Wrapper_double';
const ContentProps = () => {
    return (
        <div className="content_props">
            <h1>Content props</h1>
            <Wrapper>
                <>
                    <div>first</div>
                    <div>second</div>
                </>
            </Wrapper>
            <DoubleWrapper top={<div>top content</div>} bottom={<div>bottom content</div>}/>
        </div>
    )
}

export { ContentProps }
