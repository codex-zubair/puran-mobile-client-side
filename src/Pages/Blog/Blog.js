import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col gap-7 my-5'>
            <h1 className='text-center text-5xl my-9'>React Interview Common Question</h1>

            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">What are the different ways to manage a state in a React application?</h2>
                    <p className="text-xl"><strong>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</strong></p>
                    <p className="text-xl"><strong>URL:
                    </strong> Keeping such data in the URL allows users to share deep links with others.</p>

                    <p className="text-xl"><strong>Web Storage: </strong>
                        The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                    </p>
                    <p className="text-xl"><strong>Local State</strong>
                        The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.
                    </p>
                    <p className="text-xl"><strong>Lifted State
                    </strong>
                        The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent.
                    </p>

                    <p className="text-xl"><strong>Derived State
                    </strong>
                        The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.</p>

                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>



            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">How does prototypical inheritance work?</h2>
                    <p className="text-xl">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>


            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">What is a unit test? Why should we write unit tests?</h2>
                    <p className="text-xl">A unit test exercises a single behavior of a software module. That module is usually a class, and the behavior is usually a public method of the class.

                        The test asserts that the actual result matches the expected result. These assertions must all pass, or the unit test will fail.

                        To understand the purpose of these tests, it's important to realize that they are written by the same developer that writes the production code (the code that is being tested). Any bad assumptions about the correct behavior of the unit will appear in both the production code and the tests. This is an inherent weakness, and is one of the reasons why unit tests don't really prove that the code is working correctly.

                        Additionally, unit tests define behavior at a very low level. These are not functional/acceptance tests, and they are very far removed from any sort of functional spec that would define correct behavior. So then what is the real purpose of writing unit tests?

                        Unit tests answer the question: Does this piece of code work exactly the same as it did the last time I ran this test? Tests that are written for this purpose are called regression tests. Unit tests are a low-level regression test.

                        A good unit test suite gives developers the power to be constantly refactoring their code, and the peace of mind to sleep at night.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>



            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">React vs. Angular vs. Vue?</h2>
                    <p className="text-xl"><strong>Angular vs React</strong></p>
                    <p className="text-xl">If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>

                    <p className="text-xl"><strong>React vs Vue
                    </strong></p>
                    <p className="text-xl">
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>

                    <p className="text-xl"><strong>Angular vs Vue</strong></p>
                    <p className="text-xl">In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;