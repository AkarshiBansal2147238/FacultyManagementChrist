<?xml version="1.0" encoding="utf-8"?>
<!-- Created with Liquid Technologies Online Tools 1.0 (https://www.liquid-technologies.com) -->
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="ChristUniversity">
    <xs:complexType>
      <xs:sequence>
        <xs:element maxOccurs="unbounded" name="Faculty">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Name" type="xs:string" />
              <xs:element name="No._of_Organizations_worked_with" type="xs:unsignedByte" />
              <xs:element name="Years" type="xs:unsignedInt" />
              
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>