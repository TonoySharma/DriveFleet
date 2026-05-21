import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full gap-4 p-6 animate-fade-in">
       
            <div className="relative flex items-center justify-center">
                
                <div className="absolute w-16 h-16 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                
                <Spinner 
                    size="lg" 
                    color="primary" 
                    labelColor="primary"
                    className="drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]" 
                />
            </div>
            
        
            <div className="text-center space-y-1">
                <p className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200 uppercase animate-pulse">
                    Preparing Your Fleet
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    Please wait while we fuel up the engines...
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;