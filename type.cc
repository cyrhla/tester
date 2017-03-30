#include <node.h>
#include <v8.h>
#include <iostream>

using namespace v8;
using namespace std;

void Type(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Wrong number of arguments.")));
        return;
    }

    if (!args[0]->IsObject()) {
        Local<String> t = String::NewFromUtf8(isolate, "object");
    }

    if (!args[0]->IsBoolean()) {
        Local<String> t = String::NewFromUtf8(isolate, "boolean");
    }

    if (!args[0]->IsArray()) {
        Local<String> t = String::NewFromUtf8(isolate, "array");
    }

    if (!args[0]->IsString()) {
        Local<String> t = String::NewFromUtf8(isolate, "string");
    }

    if (!args[0]->IsNumber()) {
        Local<String> t = String::NewFromUtf8(isolate, "number");
    }

    if (!args[0]->IsFunction()) {
        Local<String> t = String::NewFromUtf8(isolate, "function");
    }

    if (!args[0]->IsNull()) {
        Local<String> t = String::NewFromUtf8(isolate, "null");
    }

    if (!args[0]->IsUndefined()) {
        Local<String> t = String::NewFromUtf8(isolate, "undefined");
    }

    if (!args[0]->IsSymbol()) {
        Local<String> t = String::NewFromUtf8(isolate, "symbol");
    }

    if (!args[0]->IsRegExp()) {
        Local<String> t = String::NewFromUtf8(isolate, "regexp");
    }

    args.GetReturnValue().Set(t); 
} 

void Init(Local <Object> exports, Local <Object> module) { 
    NODE_SET_METHOD(module, "exports", Type); 
} 

NODE_MODULE(type, Init)
