"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minsyong_people = void 0;
var typeorm_1 = require("typeorm");
var geojson_1 = require("geojson");
var Minsyong_people = /** @class */ (function () {
    function Minsyong_people() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Minsyong_people.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_people.prototype, "\u540D\u7A31", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_people.prototype, "\u4E3B\u5206\u985E", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_people.prototype, "\u6B21\u5206\u985E", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_people.prototype, "\u5C0F\u5206\u985E", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Minsyong_people.prototype, "\u6642\u9593", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Minsyong_people.prototype, "\u8A73\u7D30\u8CC7\u8A0A", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'geometry' }),
        __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
    ], Minsyong_people.prototype, "geom", void 0);
    Minsyong_people = __decorate([
        (0, typeorm_1.Entity)()
    ], Minsyong_people);
    return Minsyong_people;
}());
exports.Minsyong_people = Minsyong_people;
