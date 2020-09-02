/* eslint-disable react/no-array-index-key */
/**
 * This route is just for showcase, don't follow the
 * way of styling or structure. Remove this before you
 * go into production.
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from 'components/ui/general';

const InnerItem = ({ children, large, selected }: any) => {
  return (
    <div
      style={{
        backgroundColor: selected ? 'rgb(190, 190, 190)' : 'rgb(220, 220, 220)',
        textAlign: 'center',
        padding: `${large ? '30' : '10'}px 15px`,
        fontSize: '14px',
        color: 'black'
      }}
    >
      {children}
    </div>
  );
};

const Grid = () => {
  return (
    <>
      <Helmet>
        <title>Grid</title>
      </Helmet>
      <section>
        <Container>
          <div className="gutter-bottom-lg">
            <div className="gutter__item">
              <h1>Grid</h1>
              <p>
                Created with flexbox and BEM & ITCSS architecture. It&apos;s
                Mobile First and functional all the way down to IE11.
              </p>
              <p>
                Grid items width are created with a 12 columns system. This
                means you&apos;ll be able to use it as class &nbsp;
                <code>{`grid__item--width-{1-12}/12`}</code>
                &nbsp;. The width is item specific.
              </p>
              <p>
                Use gutters to create consistent spacings throughout the
                application. Size of the gutters are based on&nbsp;
                <code>$spacings</code>
                &nbsp;and can be applied as class&nbsp;
                <code>{`gutter-{left/bottom}-{size}`}</code>
                &nbsp;. Left (x axis) and bottom (y axis) tells which direction
                the spacings should apply. The spacings are applied to all the
                next children, not the further nested ones. Remember to add
                class <code>gutter__item</code> to the children you want spacing
                for.
              </p>
              <p style={{ marginBottom: 0 }}>
                Both grid items width and gutters are responsive and listens
                to&nbsp;
                <code>$breakpoints</code>
                &nbsp;. The keys within this Sass Map will be accessible by
                appending a&nbsp;
                <b>@</b>
                &nbsp;together with the key to the end. E.g.&nbsp;
                <code>grid__item--width-6/12@sm</code>
                &nbsp;will change to a width of 50% from breakpoint sm (768px)
                and greater, and&nbsp;
                <code>gutter-left-md@lg</code>
                &nbsp;will change to a gutter size of md for left (x axis) from
                lg (1200px) and greater.
              </p>
            </div>
            <div className="gutter__item">
              <h4>Responsive</h4>
              <p>
                Will change width and gutter size from&nbsp;
                <code>@sm</code>
                &nbsp;(768px) breakpoint.
              </p>
              <div
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  padding: '10px'
                }}
              >
                <div
                  className={`
                    grid
                    gutter-left-sm
                    gutter-left-xs@sm
                    gutter-bottom-md
                    gutter-bottom-xs@sm
                  `}
                >
                  {[...Array(6)].map((number, index) => (
                    <div
                      key={index}
                      className={`
                        grid__item
                        grid__item--width-3/12
                        grid__item--width-4/12@sm
                        gutter__item
                      `}
                    >
                      <InnerItem>{index + 1}.</InnerItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Inline items</h4>
              <p>Items will render inline.</p>
              <div
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  padding: '10px'
                }}
              >
                <div
                  className={`
                    grid
                    gutter-left-xs
                    gutter-bottom-xs
                  `}
                >
                  {[...Array(18)].map((number, index) => (
                    <div
                      key={index}
                      className={`
                        grid__item
                        gutter__item
                      `}
                    >
                      <InnerItem>{index + 1}.</InnerItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Reverse</h4>
              <p>Reverse row order of grid items.</p>
              <div
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  padding: '10px'
                }}
              >
                <div
                  className={`
                    grid
                    grid--reverse
                    gutter-left-xs
                  `}
                >
                  {[...Array(3)].map((number, index) => (
                    <div
                      key={index}
                      className={`
                        grid__item
                        grid__item--width-4/12
                        gutter__item
                      `}
                    >
                      <InnerItem>{index + 1}.</InnerItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Space</h4>
              <p>
                Collection of ways to append space to items. If you want to use
                more configurable spacings you can look at the&nbsp;
                <b>Responsive</b>
                &nbsp;example.
              </p>
              <div className="gutter-bottom-xs">
                <div className="gutter__item">
                  <h5>Between</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--between
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-3/12
                          `}
                        >
                          <InnerItem>{index + 1}.</InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Around</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--around
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-3/12
                          `}
                        >
                          <InnerItem>{index + 1}.</InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Align items</h4>
              <p>Collection of ways to align items.</p>
              <div className="gutter-bottom-xs">
                <div className="gutter__item">
                  <h5>Start</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--start
                      `}
                    >
                      {[...Array(1)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-6/12
                          `}
                        >
                          <InnerItem>{index + 1}.</InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Center</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--center
                      `}
                    >
                      {[...Array(1)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-6/12
                          `}
                        >
                          <InnerItem>{index + 1}.</InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>End</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--end
                      `}
                    >
                      {[...Array(1)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-6/12
                          `}
                        >
                          <InnerItem>{index + 1}.</InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Top</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--top
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                          `}
                        >
                          <InnerItem large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Middle</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--middle
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                          `}
                        >
                          <InnerItem large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Bottom</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        grid--bottom
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                          `}
                        >
                          <InnerItem large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Align item</h4>
              <p>Collection of ways to align an item.</p>
              <div className="gutter-bottom-xs">
                <div className="gutter__item">
                  <h5>Top</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                            ${index === 0 && 'grid__item--top'}
                          `}
                        >
                          <InnerItem selected={index === 0} large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Middle</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                            ${index === 0 && 'grid__item--middle'}
                          `}
                        >
                          <InnerItem selected={index === 0} large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Bottom</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            grid__item--width-4/12
                            gutter__item
                            ${index === 0 && 'grid__item--bottom'}
                          `}
                        >
                          <InnerItem selected={index === 0} large={index === 1}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Fill items</h4>
              <p>Fill width of items within the parent.</p>
              <div
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  padding: '10px'
                }}
              >
                <div
                  className={`
                    grid
                    grid--fill
                    gutter-left-xs
                  `}
                >
                  {[...Array(2)].map((number, index) => (
                    <div
                      key={index}
                      className={`
                        grid__item
                        gutter__item
                      `}
                    >
                      <InnerItem>{index + 1}.</InnerItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Fixed item width</h4>
              <p>
                Fixed width of an item together with the&nbsp;
                <b>Fill items</b>
                &nbsp;example.
              </p>
              <div
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  padding: '10px'
                }}
              >
                <div
                  className={`
                    grid
                    grid--fill
                    gutter-left-xs
                  `}
                >
                  {[...Array(2)].map((number, index) => (
                    <div
                      key={index}
                      style={{ width: index === 0 ? '100px' : 'auto' }}
                      className={`
                        grid__item
                        gutter__item
                        ${index === 0 && 'grid__item--fixed'}
                      `}
                    >
                      <InnerItem selected={index === 0}>{index + 1}.</InnerItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gutter__item">
              <h4>Positioning</h4>
              <p>Positioning a specific item.</p>
              <div className="gutter-bottom-xs">
                <div className="gutter__item">
                  <h5>First</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            gutter__item
                            grid__item--width-4/12
                            ${index === 2 && 'grid__item--first'}
                          `}
                        >
                          <InnerItem selected={index === 2}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gutter__item">
                  <h5>Last</h5>
                  <div
                    style={{
                      backgroundColor: 'rgb(240, 240, 240)',
                      padding: '10px'
                    }}
                  >
                    <div
                      className={`
                        grid
                        gutter-left-xs
                      `}
                    >
                      {[...Array(3)].map((number, index) => (
                        <div
                          key={index}
                          className={`
                            grid__item
                            gutter__item
                            grid__item--width-4/12
                            ${index === 0 && 'grid__item--last'}
                          `}
                        >
                          <InnerItem selected={index === 0}>
                            {index + 1}.
                          </InnerItem>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Grid;
