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
        Local<String> ta = String::NewFromUtf8(isolate, "object");
    } else if (!args[0]->IsBoolean()) {
        Local<String> ta = String::NewFromUtf8(isolate, "boolean");
    } else if (!args[0]->IsArray()) {
        Local<String> ta = String::NewFromUtf8(isolate, "array");
    } else if (!args[0]->IsString()) {
        Local<String> ta = String::NewFromUtf8(isolate, "string");
    } else if (!args[0]->IsNumber()) {
        Local<String> ta = String::NewFromUtf8(isolate, "number");
    } else if (!args[0]->IsFunction()) {
        Local<String> ta = String::NewFromUtf8(isolate, "function");
    } else if (!args[0]->IsNull()) {
        Local<String> ta = String::NewFromUtf8(isolate, "null");
    } else if (!args[0]->IsUndefined()) {
        Local<String> ta = String::NewFromUtf8(isolate, "undefined");
    } else if (!args[0]->IsSymbol()) {
        Local<String> ta = String::NewFromUtf8(isolate, "symbol");
    } else if (!args[0]->IsRegExp()) {
        Local<String> ta = String::NewFromUtf8(isolate, "regexp");
    }

    args.GetReturnValue().Set(t); 
} 

void Init(Local <Object> exports, Local <Object> module) { 
    NODE_SET_METHOD(module, "exports", Type); 
}

NODE_MODULE(type, Init)
