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

    //Local<Object> data = args.Data().As<Object>();

    Local<Value> arg0 = args[0];
    //Local <Value> type = type(arg0);

    for (int i = 0; i < args.Length(); i++) {
        Local<Value> argN = args[i];
    }

    if (args[0]->IsBoolean()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "boolean"));
    } else if (args[0]->IsArray()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "array"));
    } else if (args[0]->IsString()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "string"));
    } else if (args[0]->IsNumber()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "number"));
    } else if (args[0]->IsFunction()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "function"));
    } else if (args[0]->IsNull()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "null"));
    } else if (args[0]->IsUndefined()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "undefined"));
    } else if (args[0]->IsSymbol()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "symbol"));
    } else if (args[0]->IsRegExp()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "regexp"));
    } else if (args[0]->IsObject()) {
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "object"));
    } else {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Undefined type.")));
        return;
    }
}

void Init(Local <Object> exports, Local <Object> module) { 
    NODE_SET_METHOD(module, "exports", Type); 
} 

NODE_MODULE(type, Init)
