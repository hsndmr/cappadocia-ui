import classNames from 'classnames';
import React, { useId, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  code: React.ReactNode;
  title?: string;
  description?: string;
};

const PreviewCode: React.FC<Props> = ({ title, code }) => {
  const id = useId();

  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const toggleTab = (tab: 'preview' | 'code') => {
    setActiveTab(tab);
  };

  const tabItemClassName =
    'flex w-32 items-center justify-center text-center px-1 py-1 transition-colors delay-100 rounded-1.5xl';
  const tabItemActiveClassName = 'bg-gray-50 dark:bg-gray-dark dark:text-gray-light m-1 drop-shadow-md';
  return (
    <div className="w-full">
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <div className="rounded-1.5xl border dark:border-gray-800">
        <div className="flex border-b px-2 py-4 dark:border-gray-800">
          <div role="tablist" className="flex rounded-1.5xl bg-gray-light dark:bg-gray-700 dark:text-gray-light">
            <button
              aria-selected={activeTab === 'preview'}
              aria-controls={`${id}-preview`}
              role="tab"
              type="button"
              className={classNames([tabItemClassName, activeTab === 'preview' ? tabItemActiveClassName : ''])}
              onClick={() => toggleTab('preview')}
            >
              Preview
            </button>
            <button
              aria-selected={activeTab === 'code'}
              aria-controls={`${id}-code`}
              role="tab"
              tabIndex={activeTab === 'code' ? 0 : -1}
              type="button"
              className={classNames([tabItemClassName, activeTab === 'code' ? tabItemActiveClassName : ''])}
              onClick={() => toggleTab('code')}
            >
              Code
            </button>
          </div>
        </div>
        <div>
          {activeTab === 'preview' ? (
            <div className="px-2 py-4 transition-all" role="tabpanel" aria-labelledby={`${id}-preview`}>
              {code}
            </div>
          ) : (
            <div className="transition-all" role="tabpanel" aria-labelledby={`${id}-code`}>
              <SyntaxHighlighter
                customStyle={{
                  margin: 0,
                  borderRadius: '0 0 1rem 1rem',
                }}
                language="tsx"
                style={dracula}
              >
                {reactElementToJSXString(code, {
                  showFunctions: true,
                  functionValue: (fn) => fn.name,
                  sortProps: false,
                  useBooleanShorthandSyntax: false,
                  useFragmentShortSyntax: false,
                })}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewCode;
